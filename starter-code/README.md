# Pipeline CI/CD con GitHub Actions

> **Tipo:** DEVOPS_CONFIG · **Duración estimada:** 240 min · **Nivel:** Avanzado (nivel 3)

## Objetivo

Implementar un workflow CI/CD de 5 etapas con matrix builds, caché de dependencias y gates de deployment que previenen que código defectuoso llegue a staging.

---

## Estructura del starter

```
.
├── src/
│   └── app.js          # Módulo de utilidades (no modificar)
├── tests/
│   └── app.test.js     # Tests con ≥ 70% cobertura
├── eslint.config.js    # Configuración de ESLint 9
└── package.json
```

### Comandos disponibles

```bash
npm install       # Instala dependencias
npm run lint      # Ejecuta ESLint
npm test          # Ejecuta tests con cobertura
npm run build     # Verifica que el módulo carga correctamente
```

---

## Instrucciones

### 1. Crea el workflow de CI

Crea `.github/workflows/ci.yml` con exactamente **5 jobs**:

| Job | Descripción | Falla el pipeline si... |
|---|---|---|
| `lint` | Ejecuta `npm run lint` | Hay errores de lint |
| `test` | Ejecuta `npm test` con matrix build | Algún test falla o cobertura < 70% |
| `build` | Ejecuta `npm run build` | Hay errores de build |
| `scan` | Ejecuta Semgrep SAST | (no falla por hallazgos medios) |
| `deploy-staging` | Deploy simulado | `lint`, `test` o `scan` fallaron |

**Requisitos obligatorios:**

```yaml
# Matrix build: el job test debe correr en Node 20 y Node 22
strategy:
  matrix:
    node-version: ['20', '22']

# Caché de dependencias
- uses: actions/cache@v4
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ matrix.node-version }}-${{ hashFiles('**/package-lock.json') }}

# Gate de deployment
deploy-staging:
  needs: [lint, test, scan]
  if: >
    needs.lint.result == 'success' &&
    needs.test.result == 'success' &&
    needs.scan.result == 'success'
```

### 2. Crea el workflow de CD

Crea `.github/workflows/cd.yml` que:
- Se dispara manualmente con `workflow_dispatch`
- Ejecuta el deploy a staging (puede ser un `echo "Deploying to staging..."`)
- Aplica el mismo gate de calidad

### 3. Configura Semgrep para el job scan

```yaml
scan:
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    - uses: returntocorp/semgrep-action@v1
      with:
        config: auto
```

### 4. Verifica que el pipeline pasa

El CI debe mostrar todos los check runs en verde en tu PR.

---

## Criterios de evaluación

| Métrica | Peso | Umbral |
|---|---|---|
| Pipeline CI pasa | 30% | Todos los check runs en verde |
| 5 jobs presentes con nombres correctos | 25% | lint, test, build, scan, deploy-staging |
| Schema YAML válido | 15% | 100% |
| Caché configurada | 10% | `actions/cache` presente |
| Cobertura de tests | 10% | ≥ 70% |
| Calidad de commits | 10% | ≥ 70% siguen Conventional Commits |

---

## Convención de commits

Usa el formato **Conventional Commits** para al menos el 70% de tus commits:

```
feat: add matrix build to test job
fix: correct cache key for npm dependencies
ci: add semgrep scan job
docs: update README with CD instructions
```

---

## Recursos

- [GitHub Actions — workflow syntax](https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions)
- [actions/cache](https://github.com/actions/cache)
- [Matrix builds](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/running-variations-of-jobs-in-a-workflow)
- [Semgrep action](https://github.com/returntocorp/semgrep-action)
- [Conventional Commits](https://www.conventionalcommits.org/)
