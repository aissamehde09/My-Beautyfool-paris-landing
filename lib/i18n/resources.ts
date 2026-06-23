export const languages = ["en", "fr"] as const;

export type Language = (typeof languages)[number];

export const resources = {
  en: {
    translation: {
      language: {
        label: "Language",
        english: "EN",
        french: "FR"
      },
      home: {
        logoAlt: "My Beautyfool Paris",
        hero: {
          titlePrivate: "Private",
          titleClub: "Club",
          handwritten: "exclusive",
          audience: "Reserved for returning guests",
          intro:
            "Join My Beautyfool Paris Private Club for free and enjoy exclusive benefits all year long.",
          giftTitle: "Receive immediately",
          giftText: "your welcome gift!",
          imageAlt: "Paris apartment with Eiffel Tower view",
          quote: "The most beautiful view in all of Paris, just for you."
        },
        form: {
          title: "Our Club",
          intro: "in just a few seconds!",
          emailLabel: "E-mail Address",
          emailPlaceholder: "Your email address",
          submit: "Receive My Welcome Gift",
          loading: "Processing...",
          secure: "Your information is secure and will never be shared.",
          invalidEmail: "Please enter a valid email address.",
          fallbackError: "Unable to complete your registration. Please try again.",
          networkError: "A connection error occurred. Please try again."
        },
        benefits: {
          heading: "Exclusive Privileges",
          items: {
            rates: {
              title: "Preferred Rates",
              text:
                "Exclusive prices for your next stays."
            },
            offers: {
              title: "Private Offers",
              text:
                "Special offers reserved exclusively for members."
            },
            homes: {
              title: "New Homes First",
              text:
                "Discover our newest homes before everyone else."
            },
            referral: {
              title: "Referral Offers",
              text:
                "Refer your friends and receive special discounts."
            }
          }
        },
        banner: {
          title: "A private club, unique privileges",
          text: "Reserved for returning guests."
        },
        footer: {
          brand: "My Beautyfool Paris",
          privacy: "Privacy",
          terms: "Terms",
          contact: "Contact",
          instagram: "Instagram",
          rights: "All rights reserved."
        }
      },
      merci: {
        logoAlt: "My Beautyfool Paris",
        backgroundAlt: "Bright Paris apartment with welcome gifts",
        title: "Thank you for signing up!",
        giftTitle: "Your welcome gift is on its way!",
        giftText: "You will receive it by email in the next few hours.",
        inboxText: "Please check your inbox and your spam folder.",
        platformTitleLine1: "A new platform,",
        platformTitleLine2: "thanks to you!",
        platformText:
          "Thanks to the success of My Beautyfool Paris and the trust of travelers like you, we have launched our new direct booking platform.",
        helpText: "Today, we need your help.",
        reviewTitleBefore: "Did you enjoy",
        reviewTitleHighlight: "your stay",
        reviewTitleAfter: "?",
        reviewText:
          "A few words on Google would help future travelers discover our Paris apartments.",
        reviewButton: "Leave a Google Review",
        quickText: "Less than 30 seconds",
        signoff: "Thank you for your trust and see you soon!",
        team: "The My Beautyfool Paris team",
        websiteTitle: "Plan your next stay in Paris",
        websiteText:
          "Discover our apartments and book directly on the official My Beautyfool Paris website.",
        websiteButton: "Visit Mybeautyfoolparis.com"
      }
    }
  },
  fr: {
    translation: {
      language: {
        label: "Langue",
        english: "EN",
        french: "FR"
      },
      home: {
        logoAlt: "My Beautyfool Paris",
        hero: {
          titlePrivate: "Club",
          titleClub: "Privé",
          handwritten: "exclusif",
          audience: "Réservé à nos anciens voyageurs",
          intro:
            "Rejoignez gratuitement le My Beautyfool Paris Private Club et profitez d’avantages exclusifs toute l’année.",
          giftTitle: "Recevez immédiatement",
          giftText: "votre cadeau de bienvenue !",
          imageAlt: "Appartement parisien avec vue sur la Tour Eiffel",
          quote: "La plus belle vue de Paris, rien que pour vous."
        },
        form: {
          title: "Notre Club",
          intro: "en quelques secondes !",
          emailLabel: "Adresse e-mail",
          emailPlaceholder: "Votre adresse e-mail",
          submit: "Recevoir mon cadeau",
          loading: "Traitement...",
          secure: "Vos informations sont sécurisées et ne seront jamais partagées.",
          invalidEmail: "Veuillez saisir une adresse e-mail valide.",
          fallbackError: "Impossible de finaliser votre inscription. Veuillez réessayer.",
          networkError: "Une erreur de connexion est survenue. Veuillez réessayer."
        },
        benefits: {
          heading: "Vos avantages exclusifs",
          items: {
            rates: {
              title: "Tarifs privilégiés",
              text:
                "Des prix exclusifs sur vos prochains séjours."
            },
            offers: {
              title: "Offres privées",
              text:
                "Des offres spéciales réservées uniquement à nos membres."
            },
            homes: {
              title: "Nouveaux logements en avant-première",
              text:
                "Découvrez nos nouveaux logements avant tout le monde."
            },
            referral: {
              title: "Parrainage",
              text:
                "Parrainez vos proches et recevez des réductions."
            }
          }
        },
        banner: {
          title: "Un club privé, des privilèges uniques",
          text: "Réservé à nos anciens voyageurs."
        },
        footer: {
          brand: "My Beautyfool Paris",
          privacy: "Confidentialité",
          terms: "Mentions légales",
          contact: "Contact",
          instagram: "Instagram",
          rights: "Tous droits réservés."
        }
      },
      merci: {
        logoAlt: "My Beautyfool Paris",
        backgroundAlt: "Appartement parisien lumineux avec cadeaux de bienvenue",
        title: "Merci pour votre inscription !",
        giftTitle: "Votre cadeau de bienvenue arrive bientôt !",
        giftText: "Vous le recevrez par email dans les prochaines heures.",
        inboxText: "Pensez à vérifier votre boîte de réception ainsi que vos spams.",
        platformTitleLine1: "Une nouvelle plateforme,",
        platformTitleLine2: "grâce à vous !",
        platformText:
          "Grâce au succès de My Beautyfool Paris et à la confiance de voyageurs comme vous, nous avons lancé notre nouvelle plateforme de réservation directe.",
        helpText: "Aujourd’hui, nous avons besoin de votre aide.",
        reviewTitleBefore: "Vous avez",
        reviewTitleHighlight: "aimé",
        reviewTitleAfter: " votre séjour ?",
        reviewText:
          "Quelques mots sur Google nous aideraient énormément à faire découvrir nos logements à de futurs voyageurs.",
        reviewButton: "Laisser un avis Google",
        quickText: "Moins de 30 secondes",
        signoff: "Merci pour votre confiance et à très bientôt !",
        team: "L’équipe My Beautyfool Paris",
        websiteTitle: "Préparez votre prochain séjour à Paris",
        websiteText:
          "Découvrez nos logements et réservez directement sur le site officiel My Beautyfool Paris.",
        websiteButton: "Découvrir Mybeautyfoolparis.com"
      }
    }
  }
} as const;
