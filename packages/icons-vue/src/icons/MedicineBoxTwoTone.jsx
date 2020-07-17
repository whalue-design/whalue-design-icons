// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import MedicineBoxTwoToneSvg from '@whalue-design/icons-svg/lib/asn/MedicineBoxTwoTone';

export default {
  name: 'IconMedicineBoxTwoTone',
  displayName: 'MedicineBoxTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MedicineBoxTwoToneSvg } },
      children,
    ),
};