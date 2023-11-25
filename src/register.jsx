import { Component } from "react"
import './register.css'
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
            <div>
                <h1>Cadastre-se</h1>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.cadastrar}>
                    <label>Nome:</label>
                    <input type="text" name="nome" value={this.state.form.nome}
                        onChange={this.dadosForm} />
                    <br />

                    <label>Sobrenome:</label>
                    <input type="text" name="sobrenome" value={this.state.form.sobrenome} onChange={this.dadosForm} />
                    <br />

                    <label>Email:</label>
                    <input type="email" name="email" value={this.state.form.email}
                        onChange={this.dadosForm} />
                    <br />

                    <label>Senha:</label>
                    <input type="password" name="senha" value={this.state.form.senha}
                        onChange={this.dadosForm} />
                    <br />

                    <input type="checkbox" name="aceitarTermo" id="aceitarTermo" checked={this.state.form.aceitarTermo} onChange={this.dadosForm} />
                    <label htmlFor="aceitarTermo">Eu aceito os Termos e condições de Politica privacidade.</label>
                    <br />

                    <button type="submit" className="button-48"><span className="text">Cadastrar</span></button>
                </form>
            </div>
        );
    }
}




export default Register;