export const BarChartData = {
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    datasets: [
        {
            label: "",
            data: [100, 150, 150, 250, 280, 200, 250, 100, 270, 350, 380, 400],
            backgroundColor: (context) => {
                const chart = context.chart;
                const { ctx, chartArea } = chart;

                if (!chartArea) {
                    return null;
                }
                
                const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                gradient.addColorStop(0, 'rgba(33, 150, 243, 0.3)');
                gradient.addColorStop(1, 'rgba(33, 150, 243, 1)');
                return gradient;
            },
            borderRadius: 10,
            barPercentage: 0.6,
        },

    
    ]
}