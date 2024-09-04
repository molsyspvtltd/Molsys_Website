package org.backend.molsys.users.roles;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class RoleService {


    @Autowired
	private org.backend.molsys.users.roles.RoleRepository roleRepository;



    public void saveRoleFor(UserRole userRole) {
        Role role = new Role();
        role.setName(userRole.name());
        roleRepository.save(role);
    }


    public List<Role> findAll() {
        return roleRepository.findAll();
    }

    public Role findByRole(UserRole userRole) {

       return roleRepository.findByName(userRole.name());
    }

    public boolean shouldInitialize() {
		return roleRepository.findAll().size() <=0;
	}

    public Role getForUser() {
        return findByRole(UserRole.USER);
    }
    public Role getForLab() {
         return findByRole(UserRole.LAB);
	}

    public Role getForAnalysis() {
        return findByRole(UserRole.ANALYSIS);
    }
    public Role getForSales() {return findByRole(UserRole.SALES);}
    public Role getForOperator() {return findByRole(UserRole.OPERATOR);}
	public Role getForSuperAdmin() {return findByRole(UserRole.SUPER_ADMIN);
    }

}
