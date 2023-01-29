/*
Because foreign keys must match the data type of the column they reference,
it makes sense that changing the data type of a column is likely to upset the foreign key that references it.

It seems that MySQL has a safeguard against this, and denies an attempt to MODIFY the column.
But it's not smart enough to check whether the specific modification you're making will in fact change the data type.
It just denies any attempt to modify that column.

You can work around this by temporarily disabling foreign key checks.

https://stackoverflow.com/a/48140415/9041064
*/
SET foreign_key_checks = 0;

ALTER TABLE community
MODIFY id BIGINT(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE question
MODIFY id BIGINT(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE user_account
MODIFY id BIGINT(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE answer
MODIFY id BIGINT(20) NOT NULL AUTO_INCREMENT;

SET foreign_key_checks = 1;