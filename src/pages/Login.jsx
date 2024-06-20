import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    cep: '',
    estado: '',
    cidade: '',
    endereco: '', // Logradouro
    numero: '',
    complemento: '',
  });

  const buscarEnderecoPorCEP = async (cep) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (!data.erro) {
        setFormData({
          ...formData,
          endereco: data.logradouro,
          cidade: data.localidade,
          estado: data.uf,
        });
      }
    } catch (error) {
      console.error('Erro ao buscar o CEP:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'cep' && value.length === 8) {
      buscarEnderecoPorCEP(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você adicionaria a lógica para enviar os dados do formulário para o backend
    console.log(formData);
  };

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({
      nome: '',
      email: '',
      senha: '',
      confirmarSenha: '',
      cep: '',
      estado: '',
      cidade: '',
      endereco: '',
      numero: '',
      complemento: '',
    });
  };

  return (
    <div className="login-container">
      <h1>{isLogin ? 'Login' : 'Cadastro'}</h1>

      <form className="login-form" onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="nome">Nome Completo:</label>
            <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="senha" value={formData.senha} onChange={handleChange} required />
        </div>

        {!isLogin && (
        <>
          <div className="form-group">
            <label htmlFor="cep">CEP:</label>
            <input type="text" id="cep" name="cep" value={formData.cep} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="estado">Estado:</label>
            <input type="text" id="estado" name="estado" value={formData.estado} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="cidade">Cidade:</label>
            <input type="text" id="cidade" name="cidade" value={formData.cidade} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="endereco">Endereço (Logradouro):</label>
            <input type="text" id="endereco" name="endereco" value={formData.endereco} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="numero">Número:</label>
            <input type="text" id="numero" name="numero" value={formData.numero} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="complemento">Complemento:</label>
            <input type="text" id="complemento" name="complemento" value={formData.complemento} onChange={handleChange} />
          </div>
        </>
      )}

        <button type="submit">{isLogin ? 'Entrar' : 'Cadastrar'}</button>

        <p className="toggle-form">
          {isLogin ? 'Novo por aqui?' : 'Já tem uma conta?'}
          <Link to="#" onClick={handleToggleForm}>
            {isLogin ? ' Cadastre-se' : ' Faça login'}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
