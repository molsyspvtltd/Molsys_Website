package org.backend.molsys.users.roles;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Role {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @JsonIgnore
    private  Long role_id;

    @Column(unique = true)
    private String name;

    @Column
    @JsonIgnore
    private String description;



    public  Long getId() {
        return role_id;
    }

    public void setId( Long id) {
        this.role_id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
