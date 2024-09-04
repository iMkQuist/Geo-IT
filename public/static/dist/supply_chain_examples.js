$(document).ready(function () {
    $('input[name="supply_chain_level"]').change(function () {
        var examplesContainer = $('#examples-container');
        examplesContainer.empty();

        var selectedLevel = $(this).val();
        var examples = getExamplesForLevel(selectedLevel);

        if (examples.length > 0) {
            var examplesList = $('<ul>');
            $.each(examples, function (index, example) {
                examplesList.append($('<li>').text(example[1]));
            });
            examplesContainer.append(examplesList);
        }
    });

    function getExamplesForLevel(level) {
        switch (level) {
            case 'Raw Material Sourcing':
                return [
                    ['Farmers', 'FARMERS:  Crop and livestock producers'],
                    ['Forestry', 'FORESTRY:  Timber and wood product suppliers'],
                    ['Mining', 'MINING:  Extraction of minerals and natural resources'],
                    ['Fisheries', 'FISHERY:  Fishing and seafood production'],
                    ['Quarrying', 'QUARRYING:  Stone, Sand and aggregate suppliers'],
                    ['Horticulture', 'HORTICULTURE:  Flower and plant nurseries']
                ];
            case 'Production/Manufacturing':
                return [
                    ['Manufacturing Plants', 'MANUFACTURING PLANTS:  Production facilities for goods'],
                    ['Food Processing', 'FOOD PROCESSING:  Processing and packaging of food products'],
                    ['Textile Mills', 'TEXTILE MILLS:  Fabric and clothing manufacturing'],
                    ['Automotive Assembly', 'AUTOMOTIVE ASSEMBLY:  Vehicle production and assembly'],
                    ['Electronics Manufacturing', 'ELECTRONICS MANUFACTURING:  Production of electronic devices'],
                    ['Printing Press', 'PRINTING PRESS:  Printing and publishing services']
                ];
            case 'DIST':
                return [
                    ['Logistics Companies', 'LOGISTICS COMPANIES:  Shipping and transportation services'],
                    ['Warehousing', 'WAREHOUSING:  Storage and distribution centers'],
                    ['Wholesale Trade', 'WHOLESALE TRADE:  Distribution of goods to retailers'],
                    ['Supply Chain Management', 'SUPPLY CHAIN MANAGEMENT:  Coordination and optimization of logistics'],
                    ['Third-Party Logistics (3PL)', 'THIRD-PARTY LOGISTICS (3PL):  Outsourced logistics and fulfillment services'],
                    ['Courier Services', 'COURIER SERVICES:  Local and international delivery services']
                ];
            case 'RETAIL':
                return [
                    ['Retail Stores', 'RETAIL STORES:  Physical stores for consumer goods'],
                    ['E-commerce', 'E-COMMERCE:  Online retail platforms'],
                    ['Supermarkets', 'SUPERMARKETS:  Grocery and food retail'],
                    ['Department Stores', 'DEPARTMENT STORES:  Multi-category retail outlets'],
                    ['Fashion Shops', 'FASHION SHOPS:  Boutiques and niche retail stores'],
                    ['Automobile Dealerships', 'AUTOMOBILE DEALERSHIPS:  Car and vehicle sales']
                ];
            case 'BUSINESS':
                return [
                    ['Law Firms', 'LAW FIRMS:  Legal services and consultancy'],
                    ['Consulting Firms', 'CONSULTING FIRMS:  Business advisory and consulting services'],
                    ['Advertising Agencies', 'ADVERTISING AGENCIES:  Marketing and advertising services'],
                    ['Financial Institutions', 'FINANCIAL INSTITUTIONS:  Banks and financial service providers'],
                    ['Human Resources', 'HUMAN RESOURCES:  HR consulting and staffing services'],
                    ['Information Technology Services', 'INFORMATION TECHNOLOGY SERVICES:  IT consulting and software development']
                ];
            case 'OTHERS':
                return [
                    ['Healthcare Facilities', 'HEALTHCARE FACILITIES:  Hospitals, clinics, and medical services'],
                    ['Educational Institutions', 'EDUCATIONAL INSTITUTIONS:  Schools, colleges, and universities'],
                    ['Hospitality', 'HOSPITALITY:  Hotels, restaurants, and tourism services'],
                    ['Entertainment', 'ENTERTAINMENT:  Media, arts, and entertainment services'],
                    ['Repair Services', 'REPAIR SERVICES:  Automotive, appliance, or electronic repairs'],
                    ['Professional Cleaning', 'PROFESSIONAL CLEANING:  Commercial and residential cleaning services']
                ];
            default:
                return [];
        }
    }

});
