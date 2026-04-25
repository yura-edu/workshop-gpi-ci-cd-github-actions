# Workshop: Pipeline CI/CD con GitHub Actions

> **Slug:** `gpi-ci-cd-github-actions` · **Tipo:** DEVOPS_CONFIG · **Nivel:** 3

## Descripción

Taller donde el estudiante construye un pipeline de CI/CD de 5 etapas con matrix builds, caché de dependencias, SAST (Semgrep) y gates de deployment.

## Estructura

```
gpi-ci-cd-github-actions/
├── starter-code/               # Código de inicio para el estudiante
│   ├── src/app.js              # Módulo de utilidades (ya implementado)
│   ├── tests/app.test.js       # Tests con ≥ 70% cobertura
│   ├── eslint.config.js
│   ├── package.json
│   └── README.md
├── grader-config.json
└── implementation-plan.md
```

## El estudiante debe crear

- `.github/workflows/ci.yml` — 5 jobs + matrix + caché + gate
- `.github/workflows/cd.yml` — deploy manual con `workflow_dispatch`

## Evaluación automática

| Métrica | Peso | Umbral |
|---|---|---|
| `ci_pipeline_passes` | 30% | 1.0 |
| `ci_stages_present` | 25% | 5 jobs |
| `config_file_valid_schema` | 15% | 1.0 |
| `ci_cache_configured` | 10% | 1.0 |
| `test_coverage` | 10% | 0.7 |
| `commit_message_quality` | 10% | 0.7 |

Ver `grader-config.json` para la configuración completa.
