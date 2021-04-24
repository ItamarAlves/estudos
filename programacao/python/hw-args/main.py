import sys
import argparse

def main():
    # hwSYS()
    # hwARGAPARSEDEFAULT()
    # hwpARGAPARS()
    hwoARGSPARSE()

def hwSYS():
    for i in sys.argv:
        print (i)
    
def hwARGAPARSEDEFAULT():
    parser = argparse.ArgumentParser()
    args = parser.parse_args()    
    print(args)

#parâmetros posicionais
def hwpARGAPARS():
    parser = argparse.ArgumentParser()
    parser.add_argument('f', help="Busca arroz no sistema")
    parser.add_argument('i', help="Busca Feijão no sistema")
    args = parser.parse_args()
    print(args.f)
    print(args.i)

#aqui são opcionais os parametros
def hwoARGSPARSE():
    parser = argparse.ArgumentParser()
    parser.add_argument('-f', help="Busca arroz no sistema")

    ## Precisa passar o valor
    # parser.add_argument('-v', '--verbose', help="Busca água no sistema")
    
    # aqui não precisa passar valor, a acão já defini o valor True, ao chamar a flag.
    parser.add_argument('-v', '--verbose', help="Busca água no sistema", action="store_true")
    args = parser.parse_args()
    
    if args.verbose:
        print("Modo Verbose Ativado")
    else:
        print("Modo Verbose Inativado")

if __name__ == "__main__":
    main()    
    