# Repository interface

## Interface name
Interface should start with 'I'

## Interface implements
interface should implement IBaseRepository

# Repository realisation

## Implements and extend
Each repository should implement own interface
Each repository should extend BaseRepository

## Return model
Repository methods should return only model

## Prisma call only own table
Repository should call prisma query only with own entity tables. For example, in campaign repository we can use tables campaign, campaignDifficulties and other tables linked with campaign entity