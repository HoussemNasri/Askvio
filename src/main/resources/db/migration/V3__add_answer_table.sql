CREATE TABLE answer
(
    id                  BIGINT         NOT NULL,
    content             VARCHAR(30000) NULL,
    creation_date       datetime       NULL,
    vote_count          INT            NULL,
    answerer_account_id BIGINT         NULL,
    question_id         BIGINT         NULL,
    CONSTRAINT pk_answer PRIMARY KEY (id)
);

ALTER TABLE answer
    ADD CONSTRAINT FK_ANSWER_ON_ANSWERER_ACCOUNT FOREIGN KEY (answerer_account_id) REFERENCES user_account (id);

ALTER TABLE answer
    ADD CONSTRAINT FK_ANSWER_ON_QUESTION FOREIGN KEY (question_id) REFERENCES question (id);