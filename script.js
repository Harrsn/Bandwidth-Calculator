        const deviceCounts = {
            streaming: 0,
            gaming: 0,
            browsing: 0,
            other: 0
        };

        const bandwidthPerDevice = {
            streaming: 100,
            gaming: 100,
            browsing: 50,
            other: 15
        };

        function addDevice(type) {
            deviceCounts[type]++;
            updateCount(type);
        }

        function removeDevice(type) {
            if (deviceCounts[type] > 0) {
                deviceCounts[type]--;
                updateCount(type);
            }
        }

        function updateCount(type) {
            document.getElementById(`${type}-count`).textContent = deviceCounts[type];
        }

        function calculateBandwidth() {
            const totalBandwidth = Object.keys(deviceCounts).reduce((total, type) => {
                return total + deviceCounts[type] * bandwidthPerDevice[type];
            }, 0);

            let recommendedPlan;
            if (totalBandwidth <= 500) {
                recommendedPlan = '500 Mbps Plan';
            } else if (totalBandwidth <= 1000) {
                recommendedPlan = '1 Gig Plan';
            } else {
                recommendedPlan = '2 Gig Plan';
            }

            document.getElementById('result').innerHTML = `
                <p>Total Bandwidth Needed: <strong>${totalBandwidth} Mbps</strong></p>
                <p>Recommended Plan: <strong>${recommendedPlan}</strong></p>
            `;
        }
