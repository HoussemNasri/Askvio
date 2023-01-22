ALTER TABLE user_account
    ADD avatar_type VARCHAR(255) NULL;

UPDATE user_account
    SET avatar_type='GENERATED'
    WHERE avatar_type IS NULL;

DROP TABLE hibernate_sequence;