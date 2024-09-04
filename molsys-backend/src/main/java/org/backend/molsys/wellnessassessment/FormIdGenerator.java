package org.backend.molsys.wellnessassessment;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class FormIdGenerator {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int latestFormId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getLatestFormId() {
        return latestFormId;
    }

    public void setLatestFormId(int latestFormId) {
        this.latestFormId = latestFormId;
    }
}
