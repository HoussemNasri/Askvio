CREATE TABLE post
(
    id               BIGINT AUTO_INCREMENT NOT NULL,
    owner_account_id BIGINT                NULL,
    creation_date    datetime              NULL,
    content          VARCHAR(30000)        NULL,
    vote_count       INT                   NULL,
    CONSTRAINT pk_post PRIMARY KEY (id)
);

INSERT INTO post(id, owner_account_id, creation_date, content, vote_count)
    SELECT q.id, q.asker_account_id, q.creation_date, q.content, q.vote_count FROM question AS q;

INSERT IGNORE INTO post(id, owner_account_id, creation_date, content, vote_count)
    SELECT a.id, a.answerer_account_id, a.creation_date, a.content, a.vote_count FROM answer AS a;

ALTER TABLE answer
    ADD CONSTRAINT FK_ANSWER_ON_ID FOREIGN KEY (id) REFERENCES post (id);

ALTER TABLE answer
    ADD CONSTRAINT FK_ANSWER_ON_QUESTION FOREIGN KEY (question_id) REFERENCES question (id);

ALTER TABLE post
    ADD CONSTRAINT FK_POST_ON_OWNER_ACCOUNT FOREIGN KEY (owner_account_id) REFERENCES user_account (id);

ALTER TABLE question
    ADD CONSTRAINT FK_QUESTION_ON_ID FOREIGN KEY (id) REFERENCES post (id);

ALTER TABLE question
    DROP FOREIGN KEY FKsyov62y276f0nqdrfkj3igopr;

DROP TABLE hibernate_sequence;

ALTER TABLE answer
    DROP COLUMN answerer_account_id,
    DROP COLUMN content,
    DROP COLUMN creation_date,
    DROP COLUMN vote_count;

ALTER TABLE question
    DROP COLUMN asker_account_id,
    DROP COLUMN content,
    DROP COLUMN creation_date,
    DROP COLUMN vote_count;