package net.askvio.database;

import java.util.List;

import net.askvio.model.Answer;
import net.askvio.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
    Integer countByQuestion(Question question);

    @Query("SELECT a FROM Answer a WHERE a.question.id = :questionId")
    List<Answer> getAnswersOnQuestion(@Param("questionId") Long questionId);
}
