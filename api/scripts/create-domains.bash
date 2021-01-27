#!/bin/bash

parent_path=$( cd "$(dirname "${BASH_SOURCE[1]}")" ; pwd -P )

for folder in $@
do
  targetPath=$parent_path/src/domains
  echo Creating domain files and folders
  cd $targetPath &&
  mkdir $folder && cd $folder &&
  touch ./{index,typeDef,resolver,$folder.unit}.ts

  printf "import { gql } from 'apollo-server';\n" >> ./typeDef.ts &&
  printf "export default gql\`\n  # ...\n\`;\n" >> ./typeDef.ts &&
  printf "export { default as $folder } from './typeDef';\n" >> ./index.ts
done
