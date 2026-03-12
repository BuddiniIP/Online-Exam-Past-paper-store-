package lk.ac.sjp.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import lk.ac.sjp.entity.Paper;

public interface PaperRepository extends JpaRepository<Paper, Long> {

    List<Paper> findBySubject(String subject);

    List<Paper> findByYear(int year);

    List<Paper> findByMedium(String medium);

    List<Paper> findByType(String type);
    
    List<Paper> findBySubjectContainingAndYearAndMediumContaining(
            String subject,
            int year,
            String medium
    );

}