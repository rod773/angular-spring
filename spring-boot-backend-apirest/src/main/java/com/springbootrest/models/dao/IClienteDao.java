package com.springbootrest.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.springbootrest.models.entity.Cliente;

public interface IClienteDao extends CrudRepository<Cliente, Long> {

}
