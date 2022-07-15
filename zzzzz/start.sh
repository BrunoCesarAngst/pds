#!/bin/sh
rm -f schema.prisma
cat <<EOF > schema.prisma
generator client {
  provider = "prisma-client-js"
}
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
EOF
node_modules/.bin/prisma db pull
exec node_modules/.bin/prisma studio
exec prisma migrate dev --name init