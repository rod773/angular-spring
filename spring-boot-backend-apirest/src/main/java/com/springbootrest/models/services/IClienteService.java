package com.springbootrest.models.services;

import java.util.List;

import com.springbootrest.models.entity.Cliente;

public interface IClienteService {

	public List<Cliente> findAll();

}
