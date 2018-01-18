#!/bin/bash

curl --request POST \
  --url https://api.sendgrid.com/v3/mail/send \
  --header "Authorization: Bearer $SENDGRID_APIKEY"\
  --header 'Content-Type: application/json' \
  --data @-
