#!/bin/bash
set -euo pipefail


echo "Setting search_path to 'datasample'..."
psql -v ON_ERROR_STOP=1 --username "ruud" --dbname "store" <<-EOSQL
    ALTER ROLE ruud SET search_path TO datasample;
EOSQL

echo "Database environment is ready."


exec "$@"