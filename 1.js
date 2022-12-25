function numKeyStrokes(text) {
    const two = '~!@#$%^&*()_+{}:|<>?"';
    return text.split(``).reduce((a,b)=>a+(two.includes(b)||b===b.toUpperCase()&&/[A-Z]/.test(b)?2:1),0);
}