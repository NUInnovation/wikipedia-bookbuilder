'use strict';

  var pdfGenerate = angular.module('pdfmake', []);
  var docDefinition = {
    content: [
          {
            stack: [
               'Chapter 1    Morphology\n\n',
               ],
              style: 'header'
          },
          {
            text: [
               'A flower, sometimes known as a bloom or blossom, is the reproductive structure found in plants that are floral (plants of the division Magnoliophyta, also called angiosperms). \n\n',
            ]
          },
          {
            text: '1.1 Floral Parts\n\n',
            style: 'subheader'
          },
          'The essential parts of a flower can be considered in two parts: the vegetative part, consisting of petals and associated structures in the perianth, and the reproductive or sexual parts. A stereotypical flower consists of four kinds of structures attached to the tip of a short stalk.\n\n',

          {
            text: '1.2 Structure\n\n',
            style: 'subheader'
          },
          {
            text: [
              'Although the arrangement described above is considered "typical", plant species show a wide variation in floral structure.[1] These modifications have significance in the evolution of flowering plants and are used extensively by botanists to establish relationships among plant species.The four main parts of a flower are generally defined by their positions on the receptacle and not by their function. Many flowers lack some parts or parts may be modified into other functions and/or look like what is typically another part. In some families, like Ranunculaceae, the petals are greatly reduced and in many species the sepals are colorful and petal-like. Other flowers have modified stamens that are petal-like; the double flowers of Peonies and Roses are mostly petaloid stamens.[2] Flowers show great variation and plant scientists describe this variation in a systematic way to identify and distinguish species.\n\n Specific terminology is used to describe flowers and their parts. Many flower parts are fused together; fused parts originating from the same whorl are connate, while fused parts originating from different whorls are adnate; parts that are not fused are free. When petals are fused into a tube or ring that falls away as a single unit, they are sympetalous (also called gamopetalous). Connate petals may have distinctive regions: the cylindrical base is the tube, the expanding region is the throat and the flaring outer region is the limb. A sympetalous flower, with bilateral symmetry with an upper and lower lip, is bilabiate. Flowers with connate petals or sepals may have various shaped corolla or calyx, including campanulate, funnelform, tubular, urceolate, salverform or rotate.\n\n',
            ]
          },
          {
            text: 'Many flowers have a symmetry. When the perianth is bisected through the central axis from any point, symmetrical halves are produced, forming a radial symmetry. These flowers are also known to be actinomorphic or regular, e.g. rose or trillium. When flowers are bisected and produce only one line that produces symmetrical halves the flower is said to be irregular or zygomorphic, e.g. snapdragon or most orchids.\n\n'
          },
          {
            text: 'Chapter 2    Development  \n\n',
            style: 'header'
          },
          {
            text: 'A flower develops on a modified shoot or axis from a determinate apical meristem (determinate meaning the axis grows to a set size). It has compressed internodes, bearing structures that in classical plant morphology are interpreted as highly modified leaves.[11] Detailed developmental studies, however, have shown that stamens are often initiated more or less like modified stems (caulomes) that in some cases may even resemble branchlets.[5][12] Taking into account the whole diversity in the development of the androecium of flowering plants, we find a continuum between modified leaves (phyllomes), modified stems (caulomes), and modified branchlets (shoots).\n\n',
          },
          {
            text: '2.1 Flowering transition\n\n',
            style: 'subheader'
          },
          {
            text:'The first step of the transition is the transformation of the vegetative stem primordia into floral primordia. This occurs as biochemical changes take place to change cellular differentiation of leaf, bud and stem tissues into tissue that will grow into the reproductive organs. Growth of the central part of the stem tip stops or flattens out and the sides develop protuberances in a whorled or spiral fashion around the outside of the stem end. These protuberances develop into the sepals, petals, stamens, and carpels. Once this process begins, in most plants, it cannot be reversed and the stems develop flowers, even if the initial start of the flower formation event was dependent of some environmental cue.[17] Once the process begins, even if that cue is removed the stem will continue to develop a flower.\n\n',
          }

        ],
        styles: {
            header: {
              fontSize: 18,
              bold: true
            },
            subheader: {
              fontSize: 15,
              bold: true
            },
            quote: {
              italics: true
            },
            small: {
              fontSize: 8
            }
          }
    };


	   pdfGenerate.controller('PDFCtrl', function($scope) {

    	$scope.openPdf = function () {
  			pdfMake.createPdf(docDefinition).open();
  			};
  		$scope.print = function() {
  			pdfMake.createPdf(docDefinition).print();
  			};
	});
