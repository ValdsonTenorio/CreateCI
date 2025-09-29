const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'public');
const destDir = path.join(__dirname, '..', 'dist', 'public');

// Função para copiar diretórios
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Limpar a pasta dist/public
function clean() {
  if (fs.existsSync(destDir)) {
    fs.rmSync(destDir, { recursive: true, force: true });
  }
}

// Executar build
function build() {
  clean();
  copyDir(srcDir, destDir);
  console.log('✅ Build concluído: arquivos copiados para /dist/public');
}

build();
