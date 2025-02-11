module.exports = {
    ci: {
        collect: {
            url: ['https://www.businessinsider.com/'],
            numberOfRuns: 3
        },
        assert: {
            "assert": {
                "assertions": {
                    "categories:accessibility": ["error", {"minScore": 0.82}]
                }
            }
        },
        upload: {
            target: 'temporary-public-storage',
        }
    }
};