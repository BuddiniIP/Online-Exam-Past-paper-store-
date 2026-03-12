package lk.ac.sjp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import lk.ac.sjp.entity.Paper;
import lk.ac.sjp.repository.PaperRepository;

@CrossOrigin(origins = "*")   
@RestController
@RequestMapping("/papers")
public class PaperController {

    @Autowired
    private PaperRepository paperRepository;

    @GetMapping
    public List<Paper> getAllPapers() {
        return paperRepository.findAll();
    }

    @PostMapping
    public Paper addPaper(@RequestBody Paper paper) {
        return paperRepository.save(paper);
    }   

    @GetMapping("/subject/{subject}")
    public List<Paper> getBySubject(@PathVariable String subject) {
        return paperRepository.findBySubject(subject);
    }

    @GetMapping("/year/{year}")
    public List<Paper> getByYear(@PathVariable int year) {
        return paperRepository.findByYear(year);
    }

    @GetMapping("/medium/{medium}")
    public List<Paper> getByMedium(@PathVariable String medium) {
        return paperRepository.findByMedium(medium);
    }

    @GetMapping("/type/{type}")
    public List<Paper> getByType(@PathVariable String type) {
        return paperRepository.findByType(type);
    }

    @GetMapping("/search")
    public List<Paper> searchPapers(
            @RequestParam String subject,
            @RequestParam int year,
            @RequestParam String medium) {

        return paperRepository
                .findBySubjectContainingAndYearAndMediumContaining(
                        subject,
                        year,
                        medium
                );
    }
    
    @PutMapping("/{id}")
    public Paper updatePaper(@PathVariable Long id, @RequestBody Paper updatedPaper) {

        Paper paper = paperRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Paper not found"));

        paper.setSubject(updatedPaper.getSubject());
        paper.setYear(updatedPaper.getYear());
        paper.setMedium(updatedPaper.getMedium());
        paper.setPart(updatedPaper.getPart());
        paper.setType(updatedPaper.getType());
        paper.setFileUrl(updatedPaper.getFileUrl());

        return paperRepository.save(paper);
    }
    
    @DeleteMapping("/{id}")
    public void deletePaper(@PathVariable Long id) {
        paperRepository.deleteById(id);
    }
    
}