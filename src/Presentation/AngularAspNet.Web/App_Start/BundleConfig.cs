using System.Web.Optimization;

namespace AngularAspNet.Web
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            // Set EnableOptimizations to false for debugging.
#if (!DEBUG)
            BundleTable.EnableOptimizations = true;
#endif
            // This is an intranet application, so do not use CDN.
            bundles.UseCdn = false;

            AddCss(bundles);
            AddJavaScript(bundles);
        }

        private static void AddCss(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/bootstrap.css",
                "~/Content/site.css"));
        }

        private static void AddJavaScript(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/scripts").Include(
                "~/Scripts/jquery-{version}.js",
                "~/Scripts/common.js",
                "~/Scripts/angular.*",
                "~/Scripts/angular-*"));

            bundles.Add(new ScriptBundle("~/bundles/scripts/users").Include(
                "~/App/Users/App.js",
                "~/App/Users/Components/*.js"));
        }
    }
}