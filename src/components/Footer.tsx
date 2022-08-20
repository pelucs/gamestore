import { GithubLogo, InstagramLogo, LinkedinLogo, TelegramLogo } from 'phosphor-react';
import { Link } from 'react-router-dom';
import logotipo from '../assets/logotipo.png'

export default () => {
  return(
    <div className="flex-1 py-5 px-5 sm:px-20 flex flex-col sm:flex-row items-center justify-between 
    bg-gray-700 border-t border-gray-600">
      <Link to="/">
        <img 
          src={logotipo}
          className="w-[80px]"
        />
      </Link>

      <strong className="text-center mt-5 sm:mt-0 text-xs font-light text-gray-300">
        &copy;2022, Todos os direitos reservados. Desenvolvido por <a className="underline" target="_blank" href="https://pe-lucas.web.app/">Pedro Lucas</a>
      </strong>

      <div className="mt-5 sm:mt-0 flex items-center gap-5">
        <a 
          href="https://www.instagram.com/pe.lucs"
          target="_blank"
        >
          <InstagramLogo
            size={20}
            className="hover:text-purple-primary transition-colors"
          />
        </a>
        <a 
          href="https://www.linkedin.com/in/pedro-lucas-a25553239/"
          target="_blank"
        >
          <LinkedinLogo
            size={20}
            className="hover:text-purple-primary transition-colors"
          />
        </a>
        <a 
          href="https://github.com/pelucs"
          target="_blank"
        >
          <GithubLogo
            size={20}
            className="hover:text-purple-primary transition-colors"
          />
        </a>
        <a 
          href="https://t.me/pelucs"
          target="_blank"
        >
          <TelegramLogo
            size={20}
            className="hover:text-purple-primary transition-colors"
          />
        </a>
      </div>
    </div>
  );
}