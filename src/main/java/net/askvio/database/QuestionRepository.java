package net.askvio.database;

import java.util.List;

import net.askvio.model.Question;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

public interface QuestionRepository extends JpaRepository<Question, Long>, JpaSpecificationExecutor<Question> {

    @Query("SELECT q FROM Question q ORDER BY q.content")
    List<Question> generateFeed(Pageable pageable);

    @Query("SELECT q FROM Question q WHERE q.askedAtCommunity.name = :community")
    List<Question> getQuestionsAskedAtCommunity(String community, Pageable pageable);
}