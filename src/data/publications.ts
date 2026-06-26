import { Paper } from '../types/papers'

export const ViciPublications: Paper[] = [
  {
    title:
      'plasticparcels: A python package for marine plastic dispersal simulations and parameterisation development using parcels',
    published_info: 'Journal of Open Source Software, 9, 7094.',
    authors: 'Denes, MC, E van Sebille (2024)',
    doi: 'https://doi.org/10.21105/joss.07094',
    abstract:
      'plasticparcels is a python package for simulating the transport and dispersion of plastics in the ocean. The tool is based on v3.0.3 of the parcels computational Lagrangian ocean analysis framework (Delandmeter & van Sebille, 2019; Lange & van Sebille, 2017), providing a modular and customisable collection of methods, notebooks, and tutorials for advecting virtual plastic particles with a wide range of physical properties. The tool applies a collection of physical processes to the virtual particles, such as Stokes drift, wind-induced drift, biofouling, and turbulent mixing, via custom particle behaviour programmed in the form of Kernels. In addition to the fine-scale physics parameterisations, plasticparcels provides global particle initialisation maps that represent best estimates for plastic pollution emissions along coastlines (Jambeck et al., 2015), from river sources (Meijer et al., 2021), and in the open-ocean from fishing-related activities (Kroodsma et al., 2018), as well as a current best estimate of buoyant plastic concentrations globally (Kaandorp et al., 2023). We envisage plasticparcels as a tool for easy-to-run plastic dispersal simulations; as well as for rapid prototyping, development, and testing of new fine-scale physics parameterisations.',
  },
  {
    title: 'Stability Bias in Lagrangian (Back)tracking in Divergent Flows',
    published_info:
      'Journal of Advances in Modeling Earth Systems, 18, e2025MS005470',
    authors:
      'Reijnders, D, MC Denes, S Rühs, Ø Breivik, T Nordam, E van Sebille (2026)',
    doi: 'https://doi.org/10.1029/2025MS005470',
    abstract:
      'Forward- and backward-in-time Lagrangian advection, used to determine fate and origin of material in the ocean, are mathematically consistent. However, their numerical computations are hampered by round-off and truncation errors. Trajectory calculations are stable to errors (i.e., errors are dampened) in zones of velocity convergence and unstable (errors are amplified) in regions of divergence. The stability to errors thus flips when time integration is reversed, which, depending on the numerical configuration, can lead to significant discrepancies between forward- and backward-in-time trajectories. As divergence statistics can be asymmetrical and may be inhomogeneously distributed in space, this can lead to what we call the “stability bias.” Using representative numerical set-ups, we show that already for timescales of less than half a year, there can be systematic basin-scale biases in which regions are identified as particle origins or sinks. While the stability bias is linked to divergence, it is not only limited to 2D trajectories in 3D flows, as we discuss how inappropriate treatment of surface boundary conditions in 3D Lagrangian studies can also introduce an effective non-zero divergence. Backtracking is typically applied to material that has accumulated in convergent zones, for which the stability bias especially impedes source attribution studies. Furthermore, we show how discrepancies between forward and backward trajectories can make a Bayesian approach to backtracking unsuitable. We advise modelers to routinely compare forward- and backward trajectories and assess the bias in different numerical set-ups to increase study robustness. Analytical integration methods are less error-prone and may be preferred over RK4.',
  },
  {
    title:
      'Using surface drifters to characterise near-surface ocean dynamics in the southern North Sea: a data-driven approach',
    published_info: 'Ocean Science, 22, 49-74',
    authors:
      'Medina-Rubio, J, M Nussbaum, TS van den Bremer, E van Sebille  (2026)',
    doi: 'https://doi.org/10.5194/os-22-49-2026',
    abstract:
      'The large size of traditional drifters limits their ability to mimic the transport of buoyant objects at the ocean surface, which are subject to complex interactions among direct wind drag, fast-moving surface currents, and wave-induced transport. To better capture these dynamics, we track the trajectories of 12 novel, ultra-thin surface drifters deployed in the southern North Sea over 68 d. We adopt a data-driven approach to model drifter velocity using hydrodynamic and atmospheric data, applying both a linear leeway parameterisation and two machine learning models: random forest and support vector regression. Machine learning model-agnostic interpretation techniques reveal that tidal forcing predominantly drives zonal motion, whereas wind is the main driver in the meridional direction in this region. Notably, the wind exhibits a saturation effect, and its contribution to explaining the variance of the drifter velocity decreases at higher speeds. In trajectory prediction experiments, we find that machine learning models, particularly random forest, outperform linear models, with the latter achieving comparable accuracy only at short time scales. Using a hybrid approach and deriving a non-linear function of the wind from machine learning interpretable methods to include in the leeway parameterisation significantly improves the model prediction of the drifter trajectory. Finally, we test the generalisability of the North Sea-trained models using an independent drifter dataset from the Tyrrhenian Sea. Despite the differences in ocean dynamics between the regions, the machine learning models reproduce the observed trajectories with comparable accuracy to state-of-the-art studies, demonstrating robust explanatory skill and a low degree of overfitting in this instance.',
  },
  {
    title:
      'Exploring how oceanographers can respond to public criticism on the polluting effects of research drifters',
    published_info: 'Frontiers in Communication, 11',
    authors:
      'Sleiderink, R E van Sebille  (2026)',
    doi: 'https://doi.org/10.3389/fcomm.2026.1729709',
    abstract:
      'Many oceanographers engage with the public to raise awareness of climate change and ocean pollution. However, they may face criticism in such public engagement because of the pollution they cause themselves by not recollecting research equipment, such as drifters, from the ocean. Inadequately addressing this criticism could threaten the effectivity of their public engagement practices. In this study, we explore how oceanographers from Europe and the US experience this form of criticism, and which responses are effective. We use focus group discussions followed by a survey among members of the Dutch public with an interest in oceanography to investigate the problem, collect response strategies from oceanographers to address the criticism and determine the effectiveness of these responses at public engagement events. The results show that oceanographers have mixed experiences with how frequent they face criticism on the pollution by drifters and how serious they think the problem is. Most find it an adequate response to highlight that the scale of other sources of pollution is much larger than that of oceanographic research. However, the survey indicates that public support for this response is low, and that explaining how making drifters more sustainable and committing to also cleaning up plastic from the ocean are much more supported responses to the criticism.',
  },

]
