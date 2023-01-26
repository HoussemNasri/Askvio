package net.askvio.database;

import net.askvio.model.Answer;
import net.askvio.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
    Integer countByQuestion(Question question);
}
