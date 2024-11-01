import { SetMetadata } from '@nestjs/common';

//Chave que liberam as rotas
export const IS_PUBLIC_KEY = process.env.PUBLIC_KEY || 123;
//[Decorator] Função que verifica uma rota pública
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
