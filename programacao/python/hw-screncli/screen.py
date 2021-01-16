import click

@click.command()
@click.option("--count", default=5, help="Número de Saudações")
@click.option("--name", prompt="Nome", help="Pessoa que vai comprimentar")

def cumprimento(count, name):
    for _ in range(count):
        click.echo("Hello, %s!" % name)

if __name__ == '__main__':
    cumprimento()        