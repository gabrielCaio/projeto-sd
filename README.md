# projeto-sd
SD Project repo

# Setup

Para executar o projeto apenas na pasta raiz do projeto execute o commando:

```bash
docker compose up -d
```

Usuário e senha para os serviços como RabbitMQ e MongoDB devem ser mantidos como '*guest*'

# Ports

```bash
    {
        # == Services ==

        27017: 'MongoDB',
        5672: 'RabbitMQ',
        15672: 'RabbitMQ Manager',
        
        # == Applications ==

        3000: App 1,
        3001: App 2
    }
```

# Central

## MongoDB Express

Para entrar no mongodb express utilize:

```bash
    username: admin,
    password: pass
```