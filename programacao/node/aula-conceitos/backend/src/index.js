const express = require('express');
const { uuid, isUuid } = require('uuidv4');

const app = express();
app.use(express.json())

/**
 * Métodos HTTP:
 * 
 * GET: Buscar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT/PATCH: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Filtros e paginaçãoo
 * Route Params: Identificar recursos (Atualizar/Deletar)
 * Request Body: Conteúdo na hora de criar ou editar um recurso
 */

/**
 * 
 * Interceptador de requisições que interrompe totalmente a requisição 
 * ou altera os dados da requisição.
 */

function logRequests(request, response, next) {
    const {method, url} = request;

    const logLabel = `[${method.toUpperCase()}] ${url}`;

    console.time(logLabel);

    next(); // Próximo middleware

    console.timeEnd(logLabel);
}

function validateProjectId(request, response, next) {
    const { id } = request.params;

    if (!isUuid(id)) {
        response.status(400).json({error: 'Invalid project ID.'});
    }

    return next();
}

app.use(logRequests);
app.use('/projects/:id', validateProjectId)

app.get('/', (request, response) => {
    return response.json({
        message: 'Olá Mundo, Bem Vindo à vila de Konoha!'
    })
});

const projects = [];

app.get('/projects', (request, response) => {
    const { title } = request.query;

    console.log('filtro title:' + title)

    const results = title
        ? projects.filter(project => project.title.includes(title))
        : projects;

    return response.json(results)
});

app.post('/projects', (request, response) => {
    const { title, owner } = request.body;
    console.log('Criando title:' + title)
    console.log('Criando owner:' + owner)

    const project = {
        id: uuid(),
        title,
        owner
    };

    projects.push(project)

    return response.json(project);
});

app.put('/projects/:id', (request, response) => {
    const { id } = request.params;
    const { title, owner } = request.body;
    console.log('Alterando title id: ' + id + ' ' + title)
    console.log('Alterando owner id: ' + id + ' ' + owner)

    const projectIndex = projects.findIndex(project => project.id == id);

    if (projectIndex < 0) {
        return response.status(400).json({
            error: 'Project not found.'
        });
    }

    const project = {
        id,
        title,
        owner
    };

    projects[projectIndex] = project;

    return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
    const { id } = request.params;
    console.log('Deletando id: ' + id)

    const projectIndex = projects.findIndex(project => project.id == id);

    if (projectIndex < 0) {
        return response.status(400).json({
            error: 'Project not found.'
        });
    }

    projects.splice(projectIndex, 1)

    return response.status(204).send();
});

app.listen(2222, () => {
    console.log('=======================================Back-end STARTED!=======================================')
});