// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import BulbTwoToneSvg from '@whalue-design/icons-svg/lib/asn/BulbTwoTone';

export default {
  name: 'IconBulbTwoTone',
  displayName: 'BulbTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BulbTwoToneSvg } },
      children,
    ),
};