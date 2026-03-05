import css from "./Intro.module.css";

const Intro = () => {
  return (
    <div>
      <section className={css.intro}>
        <div className="container">
          <h1 className={css.title}>Welcome to Beginner ESL Story Course</h1>

          <p className={css.lead}>
            This course is a carefully structured English program for young
            learners, built around engaging story-based lessons.
          </p>
          <div className={`${css.content} ${css.instruction}`}>
            <h2>Мета та ідея практики:</h2>
            <p>
              Формування іншомовної комунікативної компетентності учнів 1 класу
              через системну організацію навчання на основі авторських історій
              та повторюваних мовних моделей.
            </p>

            <h2>Сутність авторської системи:</h2>
            <p>
              Курс структурований у вигляді тематичних сюжетних модулів (родина,
              природа, їжа, школа, свята, тварини тощо). Кожен модуль включає:
            </p>
            <ul>
              <li>авторську історію з повторюваними синтаксичними моделями</li>
              <li>поетапне введення лексики</li>
              <li>дотекстову активацію лексики</li>
              <li>систему післяслухових завдань</li>
              <li>візуальну підтримку</li>
              <li>комунікативні мікроситуації</li>
            </ul>

            <a className={css.downloadLink}
              href="https://drive.google.com/file/d/1N31gXHd5gNKszfoOhUn54Twdt4t6iGTU/view?usp=sharing"
              target="_blanc"
            >
              <svg className={css.icon}>
                <use href="/icons.svg#icon-download"></use>
              </svg>
              <span>Завантажити опис курсу</span>
            </a>
          </div>

          <div className={css.content}>
            <p>
              Each story focuses on specific grammar patterns and vocabulary
              fields, introduced through clear repetition, meaningful context,
              and interactive questions. Children don’t just listen — they
              respond, compare, predict, and speak.
            </p>

            <p>Throughout the course, learners systematically practice:</p>

            <ul>
              <li>Have / has</li>
              <li>Can / can’t</li>
              <li>There is / There are</li>
              <li>Present Simple & Present Continuous</li>
              <li>Future with will</li>
            </ul>

            <p>Vocabulary is organized into strong thematic units:</p>

            <ul>
              <li>Family and appearance</li>
              <li>Wild and domestic animals</li>
              <li>Farm life</li>
              <li>School objects</li>
              <li>Days of the week</li>
              <li>Seasons and weather</li>
              <li>Food and nature</li>
              <li>Shapes and colours</li>
              <li>Easter traditions</li>
            </ul>

            <p>
              Each story builds <strong>a semantic field</strong> (for example:
              season → food → description, or school → shapes → colours), which
              supports long-term retention and natural language acquisition.
            </p>

            <p>
              The course follows <strong>a spiral approach</strong> : grammar
              and vocabulary reappear across stories in new contexts, helping
              children strengthen understanding without overload.
            </p>

            <p>This is structured language development through narrative.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
