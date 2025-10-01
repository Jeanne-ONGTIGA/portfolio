export default function portfSections() {
    return(
        <section className="w-full px-4 py-10 md:py-16 lg:py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto flex-col md:flex-row items-center gap-8">

                   {/* Image */}

                   <div className="w-full md:w-1/2">
                   <img src="https://via.placeholder.com/600*400" alt="Présentation" className="w-full h-auto rounded-xl shadow-md" />
                   </div>

                     {/* Texte */}

                     <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                     <h2 className="text-3xl md:text-4xl font-bold text-gray-800">BIENVENU SUR MON PORTFOLIO</h2>
                     <p className="text-gray-600 text-base md:text-lg">
                     Je suis developpeuse full-stack 
                 . Je m'interesse à la programmation bas niveau comme passe-temps. Je suis une
                 tiny hacker.
                     </p>

                     <button className="mt-4 px-6 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                        Voir mes projets
                     </button>


                     </div>
            </div>

        </section>
    );
};
   



   