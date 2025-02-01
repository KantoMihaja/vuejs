import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";
import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";
import Accueil from "@/pages/Accueil.vue";
import ListeCrypto from '@/components/Tables/ListeCrypto.vue';
import ListeVente from '@/components/Tables/ListeVente.vue';
import AjoutPortefeuille from '@/components/Tables/AjoutPortefeuille.vue';
import Transaction from "@/components/Tables/Transaction.vue";
import ListePortefeuille from "@/components/Tables/ListePortefeuille.vue";
import AnalyseCommission from "@/components/Tables/AnalyseCommission.vue";
import Analyse from "@/components/Tables/Analyse.vue";
import Filtre from "@/components/Tables/Filtre.vue";
const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard/accueil",
    children: [
      {
        path: "dashboard/accueil", 
        name: "Accueil",
        component: Accueil,
      },

        {
        path: "dashboard/accueil", 
        name: "Accueil",
        component: Accueil,
      },
    
      
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile,
      },
      {
        path: "table",
        name: "Table List",
        component: TableList,
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography,
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons,
      },
      {
        path: "maps",
        name: "Maps",
        meta: { hideFooter: true },
        component: Maps,
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications,
      },
      {
        path: "upgrade",
        name: "Upgrade to PRO",
        component: UpgradeToPRO,
      },
      {
        path: "liste-crypto", // Redéfinir le path pour éviter les conflits
        name: "Liste des Cryptomonnaies",
        component: TableList,
      },

      {
        path: 'liste-ventes', // Chemin de la route
        name: 'Liste des ventes',
        component: ListeVente,
      },

      {
        path: 'ajouter-portefeuille', // Chemin de la route
        name: 'Ajouter portefeuilles',
        component: AjoutPortefeuille,
      },

      {
        path: 'transaction', // Chemin de la route
        name: 'Faire une transaction',
        component: Transaction,
      },

      {
        path: '/liste-portefeuille',
        name: 'ListePortefeuille',
        component: ListePortefeuille,
      },

      {
        path: '/analyseCommission',
        name: 'AnalyseCommission',
        component: AnalyseCommission,
      },

      {
        path: '/analyse',
        name: 'Analyse ',
        component: Analyse,
      },

      {
        path: '/filtre',
        name: 'Filtre ',
        component: Filtre,
      },

    ],
  },
];

export default routes;
