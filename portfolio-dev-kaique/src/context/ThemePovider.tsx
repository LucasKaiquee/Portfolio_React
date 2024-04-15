'use client'
import { createContext, useContext, useState, useEffect } from 'react';

// Crie um contexto para o tema
const ThemeContext = createContext();

// Crie um provider para o tema
export function ThemeProvider({ children }) {
    // Inicialize o estado com a preferência do usuário
    const [theme, setTheme] = useState(() => {
        // Verifique a preferência do usuário com base no armazenamento local ou nas configurações do sistema
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                return savedTheme;
            }
            // Verifique a preferência do usuário no sistema
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'light'; // Padrão para light se não houver preferências do usuário
    });

    // Atualize o tema com base na preferência do usuário
    useEffect(() => {
        const handleMediaQueryChange = (e) => {
            setTheme(e.matches ? 'dark' : 'light');
        };

        // Adicione o listener para a mudança de preferência do usuário
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', handleMediaQueryChange);

        // Limpeza
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);

    // Sincronize o estado com o armazenamento local
    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Forneça o contexto com o estado do tema e a função para alterar o tema
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className={theme === 'dark' ? 'dark' : ''}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}

// Um hook para acessar o contexto do tema
export function useTheme() {
    return useContext(ThemeContext);
}
