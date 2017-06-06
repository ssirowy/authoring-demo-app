export default function fetchSectionData() {

    return {
        "section": {
            "@{http://www.w3.org/2001/XMLSchema-instance}noNamespaceSchemaLocation": "schema.xsd",
            "zypInfos": {
                "zypInfo": [{
                    "name": {
                        "$": "Scott Sirowy"
                    },
                    "timestamp": {
                        "$": "2017-06-01T09:00:00"
                    },
                    "text": {
                        "$": "Worked on schema for 5 minutes"
                    }
                }, {
                    "name": {
                        "$": "Adrian Lizarraga"
                    },
                    "timestamp": {
                        "$": "2017-06-01T09:00:00"
                    },
                    "text": {
                        "$": "Worked on schema some more"
                    }
                }]
            },
            "title": {
                "$": "Introduction to Programming"
            },
            "contentResources": {
                "contentResource": [{
                    "@{http://www.w3.org/2001/XMLSchema-instance}type": "TextResource",
                    "@guid": 12345678,
                    "definition": {
                        "#": [{
                            "term": {
                                "$": "Programming"
                            }
                        }, {
                            "$": "is defined as tinkering with stuff"
                        }]
                    }
                }, {
                    "@{http://www.w3.org/2001/XMLSchema-instance}type": "CodeResource",
                    "@guid": 12345679,
                    "@language": "cpp",
                    "code": {
                        "$": "#include iostream\n         using namespace std;\n          \n         int main() {\n              cout something;\n         }"
                    }
                }, {
                    "@{http://www.w3.org/2001/XMLSchema-instance}type": "MultipleChoiceResource",
                    "@guid": 22345679,
                    "question": [{
                        "text": {
                            "$": "What is the approximate shape of the planet Earth?"
                        },
                        "choice": [{
                            "correct": {
                                "$": false
                            },
                            "label": {
                                "$": "Flat"
                            },
                            "explanation": {
                                "$": "The world  is not flat...  Are u sure?"
                            }
                        }, {
                            "correct": {
                                "$": false
                            },
                            "label": {
                                "$": "Round"
                            },
                            "explanation": {
                                "$": "The worl is round."
                            }
                        }]
                    }, {
                        "text": {
                            "$": "What is 2 + 2?"
                        },
                        "choice": [{
                            "correct": {
                                "$": true
                            },
                            "label": {
                                "$": 4
                            },
                            "explanation": {
                                "$": "Yeah it's 4."
                            }
                        }, {
                            "correct": {
                                "$": false
                            },
                            "label": {
                                "$": 5
                            },
                            "explanation": {
                                "$": "Nope. Try using your fingers to count."
                            }
                        }]
                    }]
                }, {
                    "@{http://www.w3.org/2001/XMLSchema-instance}type": "CommentResource",
                    "@guid": 34567789,
                    "name": {
                        "$": "Scott Sirowy"
                    },
                    "timestamp": {
                        "$": "2017-05-30T09:00:00"
                    },
                    "comment": {
                        "$": "Sample comment"
                    }
                }, {
                    "@{http://www.w3.org/2001/XMLSchema-instance}type": "ImageResource",
                    "@guid": 56712367,
                    "url": {
                        "$": "https://goo.gl/88nu4w"
                    }
                }]
            }
        }
    };
}