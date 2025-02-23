
function resaltarCaracteres(texto) {
    const coloresCaracteres = {
        '+': 'red', '-': 'red', '*': 'red', '/': 'red', '%': 'red', '**': 'red',
        '=': 'yellow', '==': 'yellow', '===': 'yellow', '!=': 'yellow', '!==': 'yellow',
        '<': 'yellow', '<=': 'yellow', '>': 'yellow', '>=': 'yellow',
        '&&': 'blue', '||': 'blue', '!': 'blue',
        '?': 'brown', ':': 'brown',
        ';': 'violet', ',': 'violet', '.': 'violet',
        '(': 'skyblue', ')': 'skyblue', '[': 'skyblue', ']': 'skyblue', '{': 'skyblue', '}': 'skyblue',
        '\\': 'cyan', '|': 'gray', '@': 'gray', '#': 'gray', '_': 'gray', '$': 'gold'
    };

    const palabrasClave = {
        'greenyellow': ['console','let', 'const', 'var', 'function', 'return', 'class', 'extends', 'super'],
        'green': ['if', 'else', 'switch', 'case', 'default', 'try', 'catch', 'finally', 'throw'],
        'gold': ['for', 'while', 'do', 'break', 'continue', 'fetch', 'document.getElementById'],
        'orange': ['async', 'await', 'new', 'typeof', 'instanceof', 'this', 'delete', 'in', 'of', 'yield', 'void'],
        'pink': ['import', 'export', 'from', 'default', 'as'],
        'cyan': ['log', 'error', 'true', 'false', 'null', 'undefined', 'NaN', 'Infinity', 'then'],
        'purple': ['Object', 'Array', 'String', 'Number', 'Boolean', 'Math', 'Date', 'JSON'],
        'red': ['eval', 'with', 'debugger'],
        'brown': ['super', 'arguments', 'apply', 'call', 'bind'],
        'teal': ['push', 'pop', 'shift', 'unshift', 'splice', 'slice', 'concat', 'map', 'filter', 'reduce', 'forEach', 'some', 'every', 'find', 'findIndex', 'sort', 'reverse'],
        'darkorange': ['charAt', 'charCodeAt', 'concat', 'includes', 'indexOf', 'lastIndexOf', 'match', 'replace', 'search', 'slice', 'split', 'substring', 'toLowerCase', 'toUpperCase', 'trim'],
        'olive': ['toFixed', 'toExponential', 'toPrecision', 'parseInt', 'parseFloat', 'isNaN', 'isFinite', 'Math.abs', 'Math.ceil', 'Math.floor', 'Math.round', 'Math.random', 'Math.max', 'Math.min', 'Math.pow', 'Math.sqrt']
    };

    // Expresión regular para detectar:
    // 1. Cadenas entre '', "", ``
    // 2. Palabras clave de JavaScript
    // 3. Caracteres especiales y operadores
    const regex = /(["'`])((?:\\.|(?!\1).)*?)\1|\b(let|const|var|console|function|return|class|extends|super|if|else|switch|case|default|try|catch|finally|throw|for|while|do|break|continue|async|await|new|typeof|instanceof|this|delete|in|of|yield|void|import|export|from|default|as|log|error|true|false|null|undefined|NaN|Infinity|Object|Array|String|Number|Boolean|Math|Date|eval|with|debugger|super|arguments|apply|call|bind|fetch|then|push|pop|shift|unshift|splice|slice|concat|map|filter|reduce|forEach|some|every|find|findIndex|sort|reverse|charAt|charCodeAt|concat|includes|indexOf|lastIndexOf|match|replace|search|slice|split|substring|toLowerCase|toUpperCase|trim|toFixed|toExponential|toPrecision|parseInt|parseFloat|isNaN|isFinite|Math.abs|Math.ceil|Math.floor|Math.round|Math.random|Math.max|Math.min|Math.pow|Math.sqrt)\b|([+\-*/   %=!&|<>?:;,.()[\]{}])/g;

    let textoResaltado = texto.replace(regex, (match, quote, stringContent, word, char) => {
        if (quote) {
            return `<span style="color: lightcoral;">${quote}${stringContent}${quote}</span>`; // Cadenas en rojo claro
        }
        if (word) {
            let color = Object.entries(palabrasClave).find(([_, list]) => list.includes(word))?.[0];
            return color ? `<span style="color: ${color};">${word}</span>` : match;
        }
        
        if (char) {
            return `<span style="color: ${coloresCaracteres[char] || 'black'}">${char}</span>`;
        }
        return match;
    });

    // Mantener saltos de línea y tabulaciones
    return textoResaltado.replace(/\n/g, '<br>').replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
}

