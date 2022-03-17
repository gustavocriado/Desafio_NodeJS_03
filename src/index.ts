/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { Console } from "console";
import {Aluno} from "./Models/Aluno"

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());
var readlineSync = require('readline-sync');

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05
	console.log('Bem vindo ao sistema das notinhas mil grau');

	let alunos = []
	var quantidadeAlunos = readlineSync.question('Quantidade de alunos:');
	
	for(var i = 1; i <= quantidadeAlunos; i++)
	{
		var primeiroAluno : Aluno = new Aluno();
		primeiroAluno.nome = readlineSync.question('Digite o Nome do Aluno: ');
		primeiroAluno.idade = readlineSync.question('Digite o Idade do Aluno: ');
		primeiroAluno.nota = readlineSync.question('Digite o Nota do Aluno: ');

		alunos[i] = primeiroAluno
	}


	const AlunoComMaiorNota = alunos.sort((a,b) => 
	{
			const notaA = a.nota ?? 0
			const notaB = b.nota ?? 0
			if(notaA > notaB)
				return -1
			else if(notaA < notaB)
				return 1
			else
			 return 0
			
	})[0]
	
	console.log(`o Aluno com a maior nota é:  ${AlunoComMaiorNota.nome}`)
});
