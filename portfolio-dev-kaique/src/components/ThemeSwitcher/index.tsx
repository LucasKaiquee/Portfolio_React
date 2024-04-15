import { useTheme } from "@/context/ThemePovider";

function ThemeSwitcher() {
    const { theme, setTheme } = useTheme()

    return (
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            Mudar para {theme === 'dark' ? 'light' : 'dark'}
        </button>
    );
}

export default ThemeSwitcher;
