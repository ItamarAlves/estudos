#/usr/bin/python3
# -*- coding: utf-8 -*-

## Fiz esse script, para ler um json, fiz como um útils para mim, pois sempre preciso.

import json

def main():
    
    with open('arquivo/arquivo.json', 'r', encoding='utf8') as arq:
        res = json.load(arq)
        for i in res['data']:
            if 'usuario' in i:
                print(i['usuario'])
            else:
                print('NÃO ENCONTROU USUARIO>>>' + i['nome'])

main()