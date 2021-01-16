#/usr/bin/python3
# -*- coding: utf-8 -*-
import click, colorama

@click.command()
@click.option("--count", default=1, help="Quantidade de vez que vai rodar o print")
@click.option("--nome", prompt="Nome", help="Nome da pessoa")
@click.option("--sobrenome", prompt="Sobrenome", help="Sobrenome da pessoa")


def cumprimento(count, nome, sobrenome):
    for _ in range(count):
        click.echo("Olá, %s, " % nome + sobrenome + "!")

if __name__ == '__main__':
    click.secho('Bem Vindo a Vida!', bg="black", fg='red', bold=True)
    cumprimento()        