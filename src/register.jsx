import { Component } from "react"
import './register.css'
import Login from '../public/image/logiin.png'
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                nome: "",
                sobrenome: "",
                email: "",
                aceitarTermo: false,
                senha: "",
                error: ""
            }
        }

        this.dadosForm = this.dadosForm.bind(this);
        this.cadastrar = this.cadastrar.bind(this);
    }

    dadosForm(e) {
        let form = this.state.form;

        if (e.target.type === 'checkbox') {
            form[e.target.name] = e.target.checked
        } else {
            form[e.target.name] = e.target.value;
        }

        this.setState({ form: form })
    }

    cadastrar(e) {
        const { nome, sobrenome, email, senha } = this.state.form;

        if (nome !== '' && sobrenome !== '' && email !== '' && senha !== '') {
            alert(`Nome: ${nome} \nSobrenome: ${sobrenome} \nEmail: ${email} \nSenha: ${senha}`)
        } else {
            this.setState({ error: "Ops, Parece que está faltando algo!" })
        }

        e.preventDefault();
    }

    render() {
        return (
            <div className="container-form">
                <div>
                    <img src={Login} alt="Imagem de login" />
                </div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.cadastrar} className="form">
                    <h1>Cadastre - se</h1>

                    <div className="input-group">
                        <input className="input" type="text" name="nome" value={this.state.form.nome}
                            onChange={this.dadosForm} />
                        <label className="label">Nome</label>
                    </div>

                    <div className="input-group">
                        <input className="input" type="text" name="sobrenome" value={this.state.form.sobrenome} onChange={this.dadosForm} />
                        <label className="label">Sobrenome</label>
                    </div>

                    <div className="input-group">
                        <input className="input" type="email" name="email" value={this.state.form.email}
                            onChange={this.dadosForm} />
                        <label className="label">Email</label>
                    </div>

                    <div className="input-group">
                        <input className="input" type="password" name="senha" value={this.state.form.senha}
                            onChange={this.dadosForm} />
                        <label className="label">Senha</label>
                    </div>

                    <div className="input-group">
                        <input type="checkbox" name="aceitarTermo" id="aceitarTermo" checked={this.state.form.aceitarTermo} onChange={this.dadosForm} />

                        <label htmlFor="aceitarTermo"> Eu aceito os Termos e condições de <span className="termo">Politica</span> de <span className="termo">privacidade</span>.</label>
                    </div>
                    
                    <button type="submit" className="button-48"><span className="text">Cadastrar</span></button>
                </form>
            </div>
        );
    }
}




export default Register;